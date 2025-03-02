<script lang="ts">
  import { tag, join, p, b } from '$lib/utils/html'

  import Quiz, { type MultipleChoice } from '$lib/components/Quiz.svelte'
  let questions: MultipleChoice[] = [
    {
      intro: p('Computers can be infected with malware. Spyware is one example of malware.'),
      statements: [],
      images: [],
      table: [],
      question: 'Which option shows the correct definition of spyware?',
      difficulty: 'Hard',
      choices: [
        'Software that activates a webcam and transmits the video to a third party that outputs it live on a website.',
        'Software that detects when a password is being entered and then emails the password to a third party.',
        'Software that records all data entered into a computer, analyses this data to find email addresses and passwords, then posts these to a website.',
        'Software that records all key presses and transmits these to a third party.',
      ],
      correctChoice: 3,
      explanation: join(
        p(`The correct answer is: Software that records all key presses and transmits these to a third party.`),
        p(`Keyloggers are an example of spyware. They log keystrokes and usually send these logs to another computer or web server.`),
        p(`The other options are too specific to be considered the definition of spyware. All spyware records some form of user action and transmits the data to a third party.`),
      ),
    },
  ]
</script>

<section>
  <h1>Questions</h1>
  <Quiz {questions} name="The Internet"></Quiz>
</section>