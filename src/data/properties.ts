import heroCarriageHouse from '../assets/properties/carriagehouse-hero-exterior.jpg'
import heroTinyHouse from '../assets/properties/meade-hero-livingroom-wide.jpg'
import heroPbghSunrise from '../assets/properties/sunrise-hero-bedroom-wide.jpg'
import heroPbghEastView from '../assets/properties/eastview-hero-bedroom-wide.jpg'
import pbghEastViewGalleryBedroom2 from '../assets/properties/eastview-gallery-bedroom2.jpg'
import pbghEastViewGalleryKitchenette from '../assets/properties/eastview-gallery-kitchenette.jpg'
import pbghEastViewGalleryBathroom from '../assets/properties/eastview-gallery-bathroom.jpg'
import pbghEastViewGalleryBedroomAlt from '../assets/properties/eastview-gallery-bedroom-alt.jpg'
import pbghEastViewGalleryDesk from '../assets/properties/eastview-gallery-desk.jpg'
import heroPbghBakery from '../assets/properties/hero-pbgh-bakery.jpg'
import heroPbghGarden from '../assets/properties/garden-hero-kitchenette-wide.jpg'

import carriageHouseGalleryBed from '../assets/properties/carriagehouse-gallery-bed.jpg'
import carriageHouseGalleryLivingWide from '../assets/properties/carriagehouse-gallery-living-wide.jpg'
import carriageHouseGalleryKitchenette from '../assets/properties/carriagehouse-gallery-kitchenette.jpg'
import carriageHouseGalleryBathroom from '../assets/properties/carriagehouse-gallery-bathroom.jpg'
import carriageHouseGalleryCloset from '../assets/properties/carriagehouse-gallery-closet.jpg'

import tinyHouseGalleryBedroom from '../assets/properties/meade-gallery-bedroom.jpg'
import tinyHouseGalleryKitchen from '../assets/properties/meade-gallery-kitchen.jpg'
import tinyHouseGalleryBathroom from '../assets/properties/meade-gallery-bathroom.jpg'
import tinyHouseGalleryPorchSwing from '../assets/properties/meade-gallery-porch-swing.jpg'
import tinyHouseGalleryWorkspace from '../assets/properties/meade-gallery-workspace.jpg'

import pbghSunriseGalleryBedroom from '../assets/properties/sunrise-gallery-bedroom.jpg'
import pbghSunriseGalleryBedroomAlt from '../assets/properties/sunrise-gallery-bedroom-alt.jpg'
import pbghSunriseGalleryBathroom from '../assets/properties/sunrise-gallery-bathroom.jpg'
import pbghSunriseGalleryWorkspace from '../assets/properties/sunrise-gallery-workspace.jpg'
import pbghSunriseGalleryKitchenette from '../assets/properties/sunrise-gallery-kitchenette.jpg'

import pbghBakeryGalleryBalcony from '../assets/properties/pbgh-bakery-gallery-balcony.jpg'
import pbghBakeryGalleryShelf from '../assets/properties/pbgh-bakery-gallery-shelf.jpg'
import pbghBakeryGallerySink from '../assets/properties/pbgh-bakery-gallery-sink.jpg'
import pbghBakeryGallerySkylight from '../assets/properties/pbgh-bakery-gallery-skylight.jpg'
import pbghBakeryGalleryShower from '../assets/properties/pbgh-bakery-gallery-shower.jpg'

import pbghGardenGalleryDining from '../assets/properties/garden-gallery-dining.jpg'
import pbghGardenGalleryBathroom from '../assets/properties/garden-gallery-bathroom.jpg'
import pbghGardenGalleryBedroomWide from '../assets/properties/garden-gallery-bedroom-wide.jpg'
import pbghGardenGalleryBedroomBalcony from '../assets/properties/garden-gallery-bedroom-balcony.jpg'
import pbghGardenGalleryHallway from '../assets/properties/garden-gallery-hallway.jpg'

import cardTinyHouse from '../assets/tiny-house-card.jpg'
import cardGuesthouse from '../assets/guesthouse-card.jpg'

export interface ListingHighlight {
  title: string
  description: string
}

export interface Property {
  slug: string
  name: string
  neighborhood: string
  cardDescription: string
  cardImage: string
  heroImage: string
  gridImage?: string
  airbnbUrl: string
  vrboUrl?: string
  bookingUrl?: string
  heroSubtitle: string
  rating: number
  reviewCount: number
  guestFavorite: boolean
  overviewTitle: string
  overviewParagraphs: string[]
  highlights: ListingHighlight[]
  amenities: string[]
  checkIn: string
  checkOut: string
  safety: string[]
  bedroomTitle: string
  bedroomBeds: string
  bedroomNote: string
  hostName: string
  hostReviews: number
  hostYears: number
  hostBlurb: string
  locationTitle: string
  locationBlurb: string
  address?: string
  galleryImages: string[]
}

export const properties: Property[] = [
  {
    slug: 'carriage-house-apartment',
    name: 'Carriage House Apartment',
    neighborhood: 'Squirrel Hill, Pittsburgh',
    cardDescription: 'A charming converted carriage house with private garden access.',
    cardImage: carriageHouseGalleryBed,
    heroImage: heroCarriageHouse,
    gridImage: carriageHouseGalleryBed,
    airbnbUrl: 'https://www.airbnb.com/rooms/45548553',
    heroSubtitle: 'Tiny home · 2 guests · 1 bedroom · 2 beds · 1 bath',
    rating: 4.88,
    reviewCount: 120,
    guestFavorite: true,
    overviewTitle: 'A comfortable Squirrel Hill stay',
    overviewParagraphs: [
      'Great location and a comfy carriage house apartment. The kitchen is well equipped, but it does not include a full range or oven.',
      'This private efficiency includes a full shower and bath, a large living area with a high-quality futon/sofa, and a small toddler/child foldout sleeper.',
    ],
    highlights: [
      { title: 'Top 5% of homes', description: 'Highly ranked on Airbnb based on ratings, reviews, and reliability.' },
      { title: 'Near Frick Park', description: 'About a 10-minute walk to Frick Park, with Squirrel Hill shops and restaurants a few blocks away.' },
      { title: 'Private backyard', description: 'Outdoor seating and a BBQ area for relaxing after a day of exploring.' },
      { title: 'Guest access', description: 'Guests have full use of the private apartment and the rear yard.' },
      { title: 'Other things to note', description: 'Access is not wheelchair friendly; stairs lead to the apartment.' },
      { title: 'The space', description: 'A comfy efficiency with a full shower and bath, a large living area, a high-quality futon/sofa, and a small toddler/child foldout sleeper.' },
    ],
    amenities: ['Kitchen', 'Wi-Fi', 'Dedicated workspace', 'EV charging', 'Pets allowed', 'Private backyard'],
    checkIn: '3:00 PM–10:00 PM',
    checkOut: 'Before 11:00 AM',
    safety: ['Exterior security cameras', 'Smoke and CO alarms'],
    bedroomTitle: 'Bedroom',
    bedroomBeds: '1 sofa bed · 1 toddler bed',
    bedroomNote: 'The main sleeping position is a folding futon.',
    hostName: 'Nicholas Dean',
    hostReviews: 364,
    hostYears: 12,
    hostBlurb: 'A responsive local host who helps guests with travel logistics, local advice, and directions.',
    locationTitle: 'Squirrel Hill, Pittsburgh',
    locationBlurb: "The property is in Squirrel Hill, close to Frick Park, neighborhood shops, restaurants, and Pittsburgh's East End destinations.",
    address: '6412 Darlington Road, Pittsburgh, PA 15217',
    galleryImages: [carriageHouseGalleryBed, carriageHouseGalleryLivingWide, carriageHouseGalleryKitchenette, carriageHouseGalleryBathroom, carriageHouseGalleryCloset],
  },
  {
    slug: 'tiny-house',
    name: 'Tiny House',
    neighborhood: 'Point Breeze, Pittsburgh',
    cardDescription: 'A beautifully designed compact escape in the East End.',
    cardImage: cardTinyHouse,
    heroImage: heroTinyHouse,
    airbnbUrl: 'https://www.airbnb.com/rooms/957761741551479770',
    vrboUrl: 'https://www.vrbo.com/4999402',
    heroSubtitle: 'Short-term stay · Point Breeze · Pittsburgh',
    rating: 4.88,
    reviewCount: 120,
    guestFavorite: true,
    overviewTitle: 'About This Property',
    overviewParagraphs: ['A beautifully designed compact escape in the East End.'],
    highlights: [
      { title: 'Property stay', description: "Comfortable short-term accommodation in Pittsburgh's East End." },
      { title: 'Local access', description: 'Conveniently located near Point Breeze and Squirrel Hill destinations.' },
      { title: 'Private space', description: 'Enjoy a dedicated property space designed for a comfortable stay.' },
      { title: 'Guest amenities', description: 'Practical amenities are presented on this property page.' },
      { title: 'Easy booking', description: 'Use the booking options below to check availability.' },
      { title: 'Guest experience', description: 'A straightforward stay with support from the Point Breeze Guest House host.' },
    ],
    amenities: ['Kitchen', 'Wi-Fi', 'Dedicated workspace', 'Pets allowed', 'Private backyard'],
    checkIn: '3:00 PM–10:00 PM',
    checkOut: 'Before 11:00 AM',
    safety: ['Exterior security cameras', 'Smoke and CO alarms'],
    bedroomTitle: 'Bedroom',
    bedroomBeds: 'Sleeping arrangements for this property',
    bedroomNote: 'See the property-specific listing details for the exact sleeping setup.',
    hostName: 'Nicholas Dean',
    hostReviews: 364,
    hostYears: 12,
    hostBlurb: "Point Breeze Guest House provides comfortable short-term stays in Pittsburgh's East End.",
    locationTitle: 'Point Breeze, Pittsburgh',
    locationBlurb: "Located in Pittsburgh's East End, with convenient access to nearby neighborhoods, universities, hospitals, and local destinations.",
    address: '6839 Meade Street, Pittsburgh, PA 15208',
    galleryImages: [tinyHouseGalleryBedroom, tinyHouseGalleryKitchen, tinyHouseGalleryBathroom, tinyHouseGalleryPorchSwing, tinyHouseGalleryWorkspace],
  },
  {
    slug: 'pbgh-sunrise',
    name: 'PBGH Sunrise',
    neighborhood: 'Point Breeze, Pittsburgh',
    cardDescription: 'Wake up to warm eastern light in this serene upper-floor unit.',
    cardImage: cardGuesthouse,
    heroImage: heroPbghSunrise,
    airbnbUrl: 'https://www.airbnb.com/rooms/47486756',
    bookingUrl: 'https://www.booking.com/hotel/us/point-breeze-guest-house.html?hotel_id=6475130',
    heroSubtitle: 'Short-term stay · Point Breeze · Pittsburgh',
    rating: 4.88,
    reviewCount: 120,
    guestFavorite: true,
    overviewTitle: 'About This Property',
    overviewParagraphs: ['A nicely restored Victorian room with great morning light, private bath, and a dedicated workspace / kitchenette.'],
    highlights: [
      { title: 'Property stay', description: "Comfortable short-term accommodation in Pittsburgh's East End." },
      { title: 'Local access', description: 'Conveniently located near Point Breeze and Squirrel Hill destinations.' },
      { title: 'Private space', description: 'Enjoy a dedicated property space designed for a comfortable stay.' },
      { title: 'Guest amenities', description: 'Practical amenities are presented on this property page.' },
      { title: 'Easy booking', description: 'Use the booking options below to check availability.' },
      { title: 'Guest experience', description: 'A straightforward stay with support from the Point Breeze Guest House host.' },
    ],
    amenities: ['Kitchen', 'Wi-Fi', 'Dedicated workspace', 'EV charging', 'Pets allowed', 'Private backyard'],
    checkIn: '3:00 PM–10:00 PM',
    checkOut: 'Before 11:00 AM',
    safety: ['Exterior security cameras', 'Smoke and CO alarms'],
    bedroomTitle: 'Bedroom',
    bedroomBeds: 'Sleeping arrangements for this property',
    bedroomNote: 'See the property-specific listing details for the exact sleeping setup.',
    hostName: 'Nicholas Dean',
    hostReviews: 364,
    hostYears: 12,
    hostBlurb: "Point Breeze Guest House provides comfortable short-term stays in Pittsburgh's East End.",
    locationTitle: 'Point Breeze, Pittsburgh',
    locationBlurb: "Located in Pittsburgh's East End, with convenient access to nearby neighborhoods, universities, hospitals, and local destinations.",
    address: '123 North Linden Avenue, Pittsburgh, PA 15208',
    galleryImages: [pbghSunriseGalleryBedroom, pbghSunriseGalleryBedroomAlt, pbghSunriseGalleryBathroom, pbghSunriseGalleryWorkspace, pbghSunriseGalleryKitchenette],
  },
  {
    slug: 'pbgh-east-view',
    name: 'PBGH East View',
    neighborhood: 'Point Breeze, Pittsburgh',
    cardDescription: 'A comfortable East End room with an adjacent fully equipped kitchenette',
    cardImage: cardGuesthouse,
    heroImage: heroPbghEastView,
    airbnbUrl: 'https://www.airbnb.com/rooms/42703538',
    bookingUrl: 'https://www.booking.com/hotel/us/point-breeze-guest-house.html?hotel_id=6475130',
    heroSubtitle: 'Short-term stay · Point Breeze · Pittsburgh',
    rating: 4.88,
    reviewCount: 120,
    guestFavorite: true,
    overviewTitle: 'About This Property',
    overviewParagraphs: ['A comfortable East End room with an adjacent fully equipped kitchenette and private bath.'],
    highlights: [
      { title: 'Property stay', description: "Comfortable short-term accommodation in Pittsburgh's East End." },
      { title: 'Local access', description: 'Conveniently located near Point Breeze and Squirrel Hill destinations.' },
      { title: 'Private space', description: 'Enjoy a dedicated property space designed for a comfortable stay.' },
      { title: 'Guest amenities', description: 'Practical amenities are presented on this property page.' },
      { title: 'Easy booking', description: 'Use the booking options below to check availability.' },
      { title: 'Guest experience', description: 'A straightforward stay with support from the Point Breeze Guest House host.' },
    ],
    amenities: ['Kitchen', 'Wi-Fi', 'Dedicated workspace', 'EV charging', 'Pets allowed', 'Private backyard'],
    checkIn: '3:00 PM–10:00 PM',
    checkOut: 'Before 11:00 AM',
    safety: ['Exterior security cameras', 'Smoke and CO alarms'],
    bedroomTitle: 'Bedroom',
    bedroomBeds: 'Sleeping arrangements for this property',
    bedroomNote: 'See the property-specific listing details for the exact sleeping setup.',
    hostName: 'Nicholas Dean',
    hostReviews: 364,
    hostYears: 12,
    hostBlurb: "Point Breeze Guest House provides comfortable short-term stays in Pittsburgh's East End.",
    locationTitle: 'Point Breeze, Pittsburgh',
    locationBlurb: "Located in Pittsburgh's East End, with convenient access to nearby neighborhoods, universities, hospitals, and local destinations.",
    address: '123 North Linden Avenue, Pittsburgh, PA 15208',
    galleryImages: [pbghEastViewGalleryBedroom2, pbghEastViewGalleryKitchenette, pbghEastViewGalleryBathroom, pbghEastViewGalleryBedroomAlt, pbghEastViewGalleryDesk],
  },
  {
    slug: 'pbgh-bakery',
    name: 'PBGH Bakery',
    neighborhood: 'Point Breeze, Pittsburgh',
    cardDescription: 'A spacious suite with a private balcony overlooking Bakery Square',
    cardImage: cardGuesthouse,
    heroImage: heroPbghBakery,
    airbnbUrl: 'https://www.airbnb.com/rooms/43624046',
    bookingUrl: 'https://www.booking.com/hotel/us/point-breeze-guest-house.html?hotel_id=6475130',
    heroSubtitle: 'Short-term stay · Point Breeze · Pittsburgh',
    rating: 4.88,
    reviewCount: 120,
    guestFavorite: true,
    overviewTitle: 'About This Property',
    overviewParagraphs: ['A spacious suite with a private balcony / terrace overlooking the green space and Bakery Square.'],
    highlights: [
      { title: 'Property stay', description: "Comfortable short-term accommodation in Pittsburgh's East End." },
      { title: 'Local access', description: 'Conveniently located near Point Breeze and Squirrel Hill destinations.' },
      { title: 'Private space', description: 'Enjoy a dedicated property space designed for a comfortable stay.' },
      { title: 'Guest amenities', description: 'Practical amenities are presented on this property page.' },
      { title: 'Easy booking', description: 'Use the booking options below to check availability.' },
      { title: 'Guest experience', description: 'A straightforward stay with support from the Point Breeze Guest House host.' },
    ],
    amenities: ['Kitchen', 'Wi-Fi', 'Dedicated workspace', 'EV charging', 'Pets allowed', 'Private backyard'],
    checkIn: '3:00 PM–10:00 PM',
    checkOut: 'Before 11:00 AM',
    safety: ['Exterior security cameras', 'Smoke and CO alarms'],
    bedroomTitle: 'Bedroom',
    bedroomBeds: 'Sleeping arrangements for this property',
    bedroomNote: 'See the property-specific listing details for the exact sleeping setup.',
    hostName: 'Nicholas Dean',
    hostReviews: 364,
    hostYears: 12,
    hostBlurb: "Point Breeze Guest House provides comfortable short-term stays in Pittsburgh's East End.",
    locationTitle: 'Point Breeze, Pittsburgh',
    locationBlurb: "Located in Pittsburgh's East End, with convenient access to nearby neighborhoods, universities, hospitals, and local destinations.",
    address: '123 North Linden Avenue, Pittsburgh, PA 15208',
    galleryImages: [pbghBakeryGalleryBalcony, pbghBakeryGalleryShelf, pbghBakeryGallerySink, pbghBakeryGallerySkylight, pbghBakeryGalleryShower],
  },
  {
    slug: 'pbgh-garden',
    name: 'PBGH Garden',
    neighborhood: 'Point Breeze, Pittsburgh',
    cardDescription: 'A garden-facing suite with two balconies and a private bath',
    cardImage: cardGuesthouse,
    heroImage: heroPbghGarden,
    airbnbUrl: 'https://www.airbnb.com/rooms/44153085',
    bookingUrl: 'https://www.booking.com/hotel/us/point-breeze-guest-house.html?hotel_id=6475130',
    heroSubtitle: 'Short-term stay · Point Breeze · Pittsburgh',
    rating: 4.88,
    reviewCount: 120,
    guestFavorite: true,
    overviewTitle: 'About This Property',
    overviewParagraphs: ['A garden-facing suite with two balconies, a kitchenette, and a private bath.'],
    highlights: [
      { title: 'Property stay', description: "Comfortable short-term accommodation in Pittsburgh's East End." },
      { title: 'Local access', description: 'Conveniently located near Point Breeze and Squirrel Hill destinations.' },
      { title: 'Private space', description: 'Enjoy a dedicated property space designed for a comfortable stay.' },
      { title: 'Guest amenities', description: 'Practical amenities are presented on this property page.' },
      { title: 'Easy booking', description: 'Use the booking options below to check availability.' },
      { title: 'Guest experience', description: 'A straightforward stay with support from the Point Breeze Guest House host.' },
    ],
    amenities: ['Kitchen', 'Wi-Fi', 'Dedicated workspace', 'EV charging', 'Pets allowed', 'Private backyard'],
    checkIn: '3:00 PM–10:00 PM',
    checkOut: 'Before 11:00 AM',
    safety: ['Exterior security cameras', 'Smoke and CO alarms'],
    bedroomTitle: 'Bedroom',
    bedroomBeds: 'Sleeping arrangements for this property',
    bedroomNote: 'See the property-specific listing details for the exact sleeping setup.',
    hostName: 'Nicholas Dean',
    hostReviews: 364,
    hostYears: 12,
    hostBlurb: "Point Breeze Guest House provides comfortable short-term stays in Pittsburgh's East End.",
    locationTitle: 'Point Breeze, Pittsburgh',
    locationBlurb: "Located in Pittsburgh's East End, with convenient access to nearby neighborhoods, universities, hospitals, and local destinations.",
    address: '123 North Linden Avenue, Pittsburgh, PA 15208',
    galleryImages: [pbghGardenGalleryDining, pbghGardenGalleryBathroom, pbghGardenGalleryBedroomWide, pbghGardenGalleryBedroomBalcony, pbghGardenGalleryHallway],
  },
]

export function getPropertyBySlug(slug: string | undefined): Property | undefined {
  return properties.find((property) => property.slug === slug)
}

export const featuredProperties = properties.slice(0, 3)
