import icons from './icons';
import images from './images';

export const optionItems = [
  {
    icon: icons.airplane,
    bgColor: ['#46aeff', '#5884ff'],
    label: 'Flight',
  },
  {
    icon: icons.train,
    bgColor: ['#fddf90', '#fcda13'],
    label: 'Train',
  },
  {
    icon: icons.bus,
    bgColor: ['#e973ad', '#da5df2'],
    label: 'Bus',
  },
  {
    icon: icons.taxi,
    bgColor: ['#fcaba8', '#fe6bba'],
    label: 'Taxi',
  },
  {
    icon: icons.bed,
    bgColor: ['#ffc465', '#ff9c5f'],
    label: 'Hotel',
  },
  {
    icon: icons.eat,
    bgColor: ['#7cf1fb', '#4ebefd'],
    label: 'Eat',
  },
  {
    icon: icons.compass,
    bgColor: ['#7be993', '#46caaf'],
    label: 'Adventure',
  },
  {
    icon: icons.event,
    bgColor: ['#fca397', '#fc7b6c'],
    label: 'Event',
  },
];

export const destinations = [
  {
    id: 0,
    name: 'Ski Villa',
    img: images.skiVilla,
  },
  {
    id: 1,
    name: 'Climbing Hills',
    img: images.climbingHills,
  },
  {
    id: 2,
    name: 'Frozen Hills',
    img: images.frozenHills,
  },
  {
    id: 3,
    name: 'Beach',
    img: images.beach,
  },
];

export default {optionItems, destinations};
