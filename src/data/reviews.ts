export interface Review {
  id: string
  author: string
  location: string
  date: string
  text: string
  propertySlug: string
}

export const reviews: Review[] = [
  {
    id: 'arlie',
    author: 'Arlie',
    location: 'Chicago, IL',
    date: 'Today',
    text: 'Excellent place. old world charm, spacious. Balconies were a nice touch. Nicholas was  communicative and responsive. Super easy and close street parking. We enjoyed our  stay.',
    propertySlug: 'carriage-house-apartment',
  },
  {
    id: 'rachel',
    author: 'Rachel',
    location: 'Atlanta, GA',
    date: 'July 2026',
    text: "This is a great place with easy access to a lot of fun things to do in Pittsburgh! The bed was also one of the most comfortable I've ever had in an Airbnb!",
    propertySlug: 'pbgh-sunrise',
  },
  {
    id: 'manny',
    author: 'Manny',
    location: 'New Orleans, LA',
    date: 'June 2026',
    text: 'This was a pleasant one bedroom stay on a nice street, with ample parking. Enjoyed the shower, tub, and sky lights. Thank you for your hospitality.',
    propertySlug: 'pbgh-garden',
  },
]

export const featuredTestimonial = {
  text: 'Nick is an excellent host, very proactive, responsive, and helpful! The location is fabulous, within easy walking distance to so many attractions, restaurants and beautiful walking trails. I definitely recommend!',
  author: 'Sarah, Saint Paul, MN — Airbnb',
}

export const reviewStats = {
  total: 301,
  airbnbRating: 5,
  superhostRating: 4.99,
  mostCommonRating: '5★',
}

export const reviewFilters = [
  { label: 'All Properties', slug: null },
  { label: 'Carriage House Apartment', slug: 'carriage-house-apartment' },
  { label: 'PBGH Sunrise', slug: 'pbgh-sunrise' },
  { label: 'PBGH Garden', slug: 'pbgh-garden' },
  { label: 'PBGH East View', slug: 'pbgh-east-view' },
  { label: 'Tiny House', slug: 'tiny-house' },
  { label: 'PBGH Bakery', slug: 'pbgh-bakery' },
]
