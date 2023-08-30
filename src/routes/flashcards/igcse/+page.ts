type Flashcard = {
  front: string,
  back: string,
}

const flashcards: Flashcard[] = [
  {
    front: 'Isotope',
    back: 'an element with the same number of protons and electrons but a different number of neutrons',
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