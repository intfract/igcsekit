<script lang="ts">
  import { onMount } from 'svelte'

  import Carousel, { type TrackItem } from '$lib/components/Carousel.svelte'

  let items: TrackItem[] = [
    {
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
      caption: 'Free Notes',
      link: '/igcse',
    },
    {
      image: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
      caption: 'Flashcards',
      link: '/flashcards',
    },
    {
      image: 'https://images.unsplash.com/flagged/photo-1584036561584-b03c19da874c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      caption: 'Quality Questions',
      link: '/igcse',
    },
    {
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      caption: 'Open Source Code',
      link: 'https://github.com/intfract/igcsekit',
    },
  ]
</script>

<svelte:head>
  <title>Home</title>
  <meta property="og:title" content="Home">
  <meta property="og:description" content="Create an account and start studying!">
</svelte:head>

<div class="container">
  <Carousel {items}></Carousel>
</div>

<style>
  .container {
    width: 100%;
    height: 100%;
  }
</style>