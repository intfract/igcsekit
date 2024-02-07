import type { Flashcard } from "$lib/components/Flashcard.svelte"

const flashcards: Flashcard[] = [
  {
    front: 'Spyware',
    back: 'a program that runs in the background and collects data by logging keystrokes',
  },
  {
    front: 'Hacking',
    back: 'the act of gaining unauthorised access to a computer system or network to steal personal data',
  },
  {
    front: 'Pharming',
    back: 'malicious code installed on a user\'s hard drive or on the web server that redirects the user to a fake website',
  },
  {
    front: 'Phishing',
    back: 'a scam where an email pretends to be legitimate but contains links which redirect the user to a fake website',
  },
  {
    front: 'Cookie',
    back: 'a packet of information sent by a web server to a web browser used to track and maintain user preferences',
  },
  {
    front: 'Firewall',
    back: 'hardware or software that examines network traffic, blocks unauthorised access, and maintains logs to maximise security',
  },
  {
    front: 'Proxy Server',
    back: 'hardware or software that can act as a firewall and keep the user\'s IP secret',
  },
]

export function load({ url }): 
{
  pathname: string,
  hostname: string,
  flashcards: Flashcard[],
} 
{
  return {
    pathname: url.pathname,
    hostname: url.hostname,
    flashcards,
  }
}