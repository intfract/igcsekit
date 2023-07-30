<script lang="ts">
	import './styles.css'
	import { onMount, createEventDispatcher } from 'svelte'
	import { fly } from 'svelte/transition'
	import { state } from '../stores/state'
	import { titleCase } from '$lib/utils/text'

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

	$: title = titleCase(data.pathname.split('/').at(-1) ?? '')
	let closed = false
	let hasAccount = false
	let isGuest: boolean
	let displayName: string
	let menu: Menu
	let open: boolean = false
	$: active = data.pathname
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
		displayName = value.account?.name || ''
	})

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

		const twemoji: any = 'twemoji' in window ? window.twemoji : null
		closed = true
		document.querySelector('#password input')?.setAttribute('type', 'password')
		document.querySelector('#submit')?.addEventListener('click', submit)
		document.querySelectorAll('p, li, .callout').forEach(element => twemoji.parse(element))
	})

	$: drawerItems = [
		{
			icon: 'home',
			label: 'Home',
			url: '/',
		},
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
	]

	function toggleDialog() {
		dialogOpen = !dialogOpen
	}

	function toggleDrawer() {
		open = !open
	}
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={title} />
	<meta property="og:title" content={title}>
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
			{#key data.pathname}
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
			<div class="oauth">
				<IconButton on:click={() => state.oAuth('github', `https://${data.hostname}`)}>
					<svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
						<path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
					</svg>
				</IconButton>
			</div>
		</DialogContent>
		<Actions>
			<Button on:click={() => (false)}>
				<Label>Cancel</Label>
			</Button>
			<Button
				defaultAction
				variant="raised"
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
