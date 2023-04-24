<script lang="ts">
	import { onMount } from 'svelte'
	import TopAppBar from '@smui/top-app-bar'
	import { Row, Section, Title } from '@smui/top-app-bar'
	import IconButton from '@smui/icon-button'
	import Menu from '@smui/menu'
	import List, { Item, Separator, Text } from '@smui/list'
  import Button, { Label } from '@smui/button'
	import Dialog, { Content, Actions, InitialFocus, Title as DialogTitle } from '@smui/dialog'
	import Textfield from '@smui/textfield'
	import HelperText from '@smui/textfield/helper-text'

	let menu: Menu
	let isGuest: boolean = true
	let open: boolean = false
	let username: string = ''
	$: isInvalidUsername = username.length < 2 || username.match(/[!@#$%^&*()\[\]{}=,.]/g) ? true : false // no special characters in username
	let password: string = ''
	$: isInvalidPassword = password.length < 8
	$: modifiedUsername = username.trim().toLowerCase().replace(/[!@#$%^&*()\[\]{}=,. ]/g, '')

	function submit() {
		if (!isInvalidUsername && !isInvalidPassword) {
			console.log(modifiedUsername)
			console.log(password)
		} else {
			console.log('INVALID CREDENTIALS!')
		}
	}

	onMount(() => {
		document.querySelector('#password input')?.setAttribute('type', 'password')
	})
</script>


<div class="top-app-bar-container flexor">
	<TopAppBar variant="static">
		<Row>
			<Section>
				<IconButton class="material-symbols-rounded">menu</IconButton>
				<Title>IGCSE Kit</Title>
			</Section>
			<Section align="end" toolbar>
				<IconButton class="material-symbols-rounded" aria-label="Settings">settings</IconButton>
				<div>
					<IconButton class="material-symbols-rounded" aria-label="Account" on:click={() => (menu.setOpen(true))}>account_circle</IconButton>
					<Menu bind:this={menu}>
						<List>
							{#if isGuest}
								<Item on:click={() => (open = true)}>
									<Text>Login</Text>
								</Item>
								{:else}
								<Item on:click={() => (false)}>
									<Text>Profile</Text>
								</Item>
								<Separator />
								<Item on:click={() => (false)}>
									<Text>Delete</Text>
								</Item>
							{/if}
						</List>
					</Menu>
				</div>
			</Section>
		</Row>
	</TopAppBar>
</div>

<Dialog
  bind:open
  aria-labelledby="default-focus-title"
  aria-describedby="default-focus-content"
>
  <DialogTitle id="default-focus-title">Authorise Account</DialogTitle>
  <Content id="default-focus-content">
    Please connect your account to get the full experience!
		<div class="login">
			<Textfield bind:invalid={isInvalidUsername} bind:value={username} label="Username" variant="outlined" id="username">
				<HelperText slot="helper">{isInvalidUsername ? '2 letters no special characters!' : `You will be: ${modifiedUsername}`}</HelperText>
			</Textfield>
			<Textfield bind:invalid={isInvalidPassword} bind:value={password} label="Password" variant="outlined" id="password">
				<HelperText slot="helper">{isInvalidPassword ? '8 letters!' : `Your password is: ${password.match(/[!@#$%^&*()\[\]{}0-9]/g) ? 'STRONG' : 'WEAK'}`}</HelperText>
			</Textfield>
		</div>
  </Content>
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

<style>
	
</style>