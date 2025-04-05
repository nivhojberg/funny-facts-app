import FactCard from '@/components/fact-card.vue'

export default {
  title: 'Components/FactCard',
  component: FactCard,
  argTypes: {
    fact: { control: 'object' },
  },
}

export const Default = {
  args: {
    fact: {
      funnyFact: 'Test fact',
      source: 'BBC',
      originalLink: 'https://www.bbc.co.uk',
      publicationDate: '05/04/2025',
    },
  },
}
