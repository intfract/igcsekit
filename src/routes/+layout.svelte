<script lang="ts">
	import './styles.css'
	import { onMount, createEventDispatcher } from 'svelte'
	import { fly } from 'svelte/transition'
	import { state } from '../stores/state'

	export let data

	import LinearProgress from '@smui/linear-progress'
	import TopAppBar from '@smui/top-app-bar'
	import { Row, Section, Title } from '@smui/top-app-bar'
	import IconButton from '@smui/icon-button'
	import Menu from '@smui/menu'
	import List, { Item, Separator, Text, Graphic, Subheader } from '@smui/list'
	import Drawer, {
    AppContent,
    Content,
    Header,
    Title as DrawerTitle,
    Subtitle,
    Scrim,
  } from '@smui/drawer'
	import Button, { Label } from '@smui/button'
	import Dialog, { Content as DialogContent, Actions, InitialFocus, Title as DialogTitle } from '@smui/dialog'
	import Snackbar, { Actions as SnackbarActions, Label as SnackbarLabel } from '@smui/snackbar'
	import Textfield from '@smui/textfield'
	import HelperText from '@smui/textfield/helper-text'
	import Checkbox from '@smui/checkbox'

	type DrawerItem = {
		icon: string,
		label: string,
		url: string,
	}

	const badRegex = /[^A-Za-z0-9_]/g
	const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	const errorRegex = /auth\/[a-z-]+/g

	let closed = false
	let hasAccount = false
	let isGuest: boolean
	let displayName: string
	let menu: Menu
	let open: boolean = false
	$: active = data.url
	let dialogOpen: boolean = false
	let username: string = ''
	$: isInvalidUsername = username.length < 2 || username.match(badRegex) ? true : false // no special characters in username
	let email: string = ''
	$: isInvalidEmail = email.match(emailRegex) ? false : true // reverse the match
	let password: string = ''
	$: isInvalidPassword = password.length < 8
	$: modifiedUsername = username.trim().toLowerCase().replace(badRegex, '')
	let snackbar: Snackbar
	$: snackbarText = ''

	state.subscribe(value => {
		isGuest = !value.account
	})

	function showError(reason: Error) {
		const match = reason.message.match(errorRegex)
		snackbarText = match ? `Sorry, ${match[0].split('/')[1].replaceAll('-', ' ')}!` : 'An error occurred!'
		snackbar.open()
	}

	onMount(async () => {
		async function submit() {
			if (isInvalidEmail || isInvalidPassword) {
				snackbarText = 'Please check your email and password.'
				snackbar.open()
				return
			}
			if (!hasAccount) {
				if (isInvalidUsername) return
				try {
					await state.signUp(email, password, modifiedUsername)
				} catch (e) {
					console.log(e)
					snackbarText = 'A user with the same email already exists!'
					snackbar.open()
				}
			}
			try {
				await state.signIn(email, password)
			} catch (e) {
				console.log(e)
				snackbarText = 'Invalid credentials were provided!'
				snackbar.open()
			}
		}
		closed = true
		document.querySelector('#password input')?.setAttribute('type', 'password')
		document.querySelector('#submit')?.addEventListener('click', submit)
	})

	$: drawerItems = [
		{
			icon: 'home',
			label: 'Home',
			url: '/',
		},
		...(isGuest ? [
			{
				icon: 'emoji_objects',
				label: 'Open IGCSE',
				url: 'https://igcse.cyclic.app',
			},
		] : [
			{
				icon: 'dashboard',
				label: 'Dashboard',
				url: '/dashboard',
			},
			{
				icon: 'bolt',
				label: 'Flashcards',
				url: '/flashcards',
			},
		]),
	]

	function toggleDialog() {
		dialogOpen = !dialogOpen
	}

	function toggleDrawer() {
		open = !open
	}
</script>

<svelte:head>
	<title>IGCSE Kit</title>
	<meta name="description" content="IGCSE Kit" />
	<meta property="og:title" content="IGCSE Kit">
	<meta property="og:url" content="https://igcsekit.vercel.app">
	<meta property="og:description" content="Your free IGCSE training kit!">
	<meta name="theme-color" content="#2c6fef">
</svelte:head>

<div class="app">
	<Snackbar bind:this={snackbar}>
		<SnackbarLabel>{snackbarText}</SnackbarLabel>
		<SnackbarActions>
			<IconButton class="material-symbols-rounded" title="dismiss">close</IconButton>
		</SnackbarActions>
	</Snackbar>
	<div class="top-app-bar-container flexor">
		<TopAppBar variant="static">
			<Row>
				<Section>
					<IconButton class="material-symbols-rounded" on:click={toggleDrawer}>menu</IconButton>
					<Title>IGCSE Kit</Title>
				</Section>
				<Section align="end" toolbar>
					<IconButton class="material-symbols-rounded" aria-label="Settings">settings</IconButton>
					<div>
						<IconButton class="material-symbols-rounded" aria-label="Account" on:click={() => (menu.setOpen(true))}>account_circle</IconButton>
						<Menu bind:this={menu}>
							<List>
								{#if isGuest}
									<Item on:click={toggleDialog}>
										<Text>Account</Text>
									</Item>
									{:else}
									<Item>
										<Text>Profile</Text>
									</Item>
									<Separator />
									<Item on:click={() => state.signOut()} id="exit">
										<Text>Exit</Text>
									</Item>
								{/if}
							</List>
						</Menu>
					</div>
				</Section>
			</Row>
		</TopAppBar>
	</div>
	
	<div class="drawer-container">
		<Drawer variant="modal" fixed={false} bind:open>
			<Header>
				<DrawerTitle>{isGuest ? 'Anonymous' : displayName}</DrawerTitle>
				<Subtitle>{isGuest ? 'Guest Account' : 'Valid Account'}</Subtitle>
			</Header>
			<Content>
				<List>
					{#each drawerItems as item}
						<Item href={item.url} on:click={toggleDrawer} activated={active == item.url}>
							<Graphic class="material-symbols-rounded">{item.icon}</Graphic>
							<Text>{item.label}</Text>
						</Item>
					{/each}
				</List>
			</Content>
		</Drawer>
		<Scrim fixed={false}/>
		<AppContent class="app-content">
			{#key data.url}
				<main class="main-content" in:fly={{ x: -200, duration: 500, delay: 500 }} out:fly={{ x: 200, duration: 500 }}>
					<slot/>
				</main>
			{/key}
		</AppContent>
	</div>
	<Dialog
		bind:open={dialogOpen}
		aria-labelledby="default-focus-title"
		aria-describedby="default-focus-content"
	>
		<DialogTitle id="default-focus-title">Authorise Account</DialogTitle>
		<DialogContent id="default-focus-content">
			{hasAccount ? 'Welcome back!' : 'Please create an account to save your progress!'}
			<div class="login">
				{#if !hasAccount}
					<Textfield invalid={isInvalidUsername} bind:value={username} label="Username" variant="outlined" id="username">
						<HelperText slot="helper">{isInvalidUsername ? '2 letters, no special characters!' : `You will be: ${modifiedUsername}`}</HelperText>
					</Textfield>
				{/if}
				<Textfield invalid={isInvalidEmail} bind:value={email} label="Email" variant="outlined" id="email">
					<HelperText slot="helper">{isInvalidEmail ? 'Must be a valid email!' : `Good email!`}</HelperText>
				</Textfield>
				<Textfield invalid={isInvalidPassword} bind:value={password} label="Password" variant="outlined" id="password">
					<HelperText slot="helper">{isInvalidPassword ? '8 letters!' : `Your password is: ${password.match(/[!@#$%^&*()\[\]{}0-9]/g) ? 'STRONG' : 'WEAK'}`}</HelperText>
				</Textfield>
			</div>
			<div class="middle">
				<Checkbox bind:checked={hasAccount}/>
				<span class="label">I already have an account.</span>
			</div>
		</DialogContent>
		<Actions>
			<Button on:click={() => (false)}>
				<Label>Cancel</Label>
			</Button>
			<Button
				defaultAction
				use={[InitialFocus]}
				id="submit"
			>
				<Label>Submit</Label>
			</Button>
		</Actions>
	</Dialog>
</div>

<style>
	.drawer-container {
		position: relative;
		display: flex;
		overflow: hidden;
		z-index: 0;
	}
 
  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }
 
  .main-content {
    overflow: auto;
    padding: 16px;
    height: 100vh;
    box-sizing: border-box;
  }
</style>
