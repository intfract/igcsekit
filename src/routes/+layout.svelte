<script lang="ts">
	import './styles.css'
	import { onMount } from 'svelte'
	import { page, navigating } from '$app/stores'
	import { fly, fade, blur } from 'svelte/transition'

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
	import Textfield from '@smui/textfield'
	import HelperText from '@smui/textfield/helper-text'

	type DrawerItem = {
		icon: string,
		label: string,
		url: string,
	}

	let closed = false
	$: isGuest = false
	let menu: Menu
	let open: boolean = false
	$: active = data.url
	let dialogOpen: boolean = false
	let username: string = ''
	$: isInvalidUsername = username.length < 2 || username.match(/[!@#$%^&*()\[\]{}=,.]/g) ? true : false // no special characters in username
	let password: string = ''
	$: isInvalidPassword = password.length < 8
	$: modifiedUsername = username.trim().toLowerCase().replace(/[!@#$%^&*()\[\]{}=,. ]/g, '')

	onMount(async () => {
		closed = true
		document.querySelector('#password input')?.setAttribute('type', 'password')
	})

	$: drawerItems = [
		{
			icon: 'home',
			label: 'Home',
			url: '/',
		},
		...(isGuest? [
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

	function submit() {
		if (!isInvalidUsername && !isInvalidPassword) {
			console.log(modifiedUsername)
			console.log(password)
			isGuest = false
		} else {
			console.log('INVALID CREDENTIALS!')
		}
	}
</script>

<div class="app">
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
										<Text>Login</Text>
									</Item>
									{:else}
									<Item on:click={() => (false)}>
										<Text>Profile</Text>
									</Item>
									<Separator />
									<Item on:click={() => (false)}>
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
				<DrawerTitle>{isGuest ? 'Anonymous' : modifiedUsername}</DrawerTitle>
				<Subtitle>{isGuest ? 'Guest Account' : 'Verified Account'}</Subtitle>
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
				<main class="main-content" in:fly={{ x: -200, duration: 1000, delay: 1000 }} out:fly={{ x: 200, duration: 1000 }}>
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
			Please connect your account to get the full experience!
			<div class="login">
				<Textfield invalid={isInvalidUsername} bind:value={username} label="Username" variant="outlined" id="username">
					<HelperText slot="helper">{isInvalidUsername ? '2 letters no special characters!' : `You will be: ${modifiedUsername}`}</HelperText>
				</Textfield>
				<Textfield invalid={isInvalidPassword} bind:value={password} label="Password" variant="outlined" id="password">
					<HelperText slot="helper">{isInvalidPassword ? '8 letters!' : `Your password is: ${password.match(/[!@#$%^&*()\[\]{}0-9]/g) ? 'STRONG' : 'WEAK'}`}</HelperText>
				</Textfield>
			</div>
		</DialogContent>
		<Actions>
			<Button on:click={() => (false)}>
				<Label>Cancel</Label>
			</Button>
			<Button
				defaultAction
				use={[InitialFocus]}
				on:click={submit}
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
