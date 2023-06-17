import Home from 'src/pages/home';
import ElectricGuitars from 'src/pages/guitars/electric-guitars';
import AcousticGuitars from 'src/pages/guitars/acoustic-guitars';
import GuitarAccessories from 'src/pages/guitars/accessories';
import ElectricBasses from 'src/pages/basses/electric-basses';
import AcousticBasses from 'src/pages/basses/acoustic-basses';
import BassAccessories from 'src/pages/basses/accessories';
import GuitarAmps from 'src/pages/amps/guitar-amps';
import BassAmps from 'src/pages/amps/bass-amps';
import Effects from 'src/pages/amps/effects';
import AcousticDrums from 'src/pages/drums/acoustic-drums';
import ElectronicDrums from 'src/pages/drums/electronic-drums';
import DrumAccesories from 'src/pages/drums/accesories';
import DigitalPianos from 'src/pages/keyboards/digital-pianos';
import Organs from 'src/pages/keyboards/organs';
import Keyboards from 'src/pages/keyboards/keyboards';
import AudioInterfaces from 'src/pages/recording/audio-interfaces';
import Microphones from 'src/pages/recording/microphones';
import StudioMonitors from 'src/pages/recording/studio-monitors';
import ProductDetails from 'src/pages/product';
import Cart from 'src/pages/cart/cart';

const routes = [
  { path: '/', component: Home },
  
  { path: '/ElectricGuitars', component: ElectricGuitars },
  { path: '/AcousticGuitars', component: AcousticGuitars },
  { path: '/GuitarAccessories', component: GuitarAccessories },

  { path: '/ElectricBasses', component: ElectricBasses },
  { path: '/AcousticBasses', component: AcousticBasses },
  { path: '/BassAccessories', component: BassAccessories },

  { path: '/GuitarAmps', component: GuitarAmps },
  { path: '/BassAmps', component: BassAmps },
  { path: '/Effects', component: Effects },

  { path: '/AcousticDrums', component: AcousticDrums },
  { path: '/ElectronicDrums', component: ElectronicDrums },
  { path: '/DrumAccesories', component: DrumAccesories },

  { path: '/DigitalPianos', component: DigitalPianos },
  { path: '/Organs', component: Organs },
  { path: '/Keyboards', component: Keyboards },

  { path: '/AudioInterfaces', component: AudioInterfaces },
  { path: '/Microphones', component: Microphones },
  { path: '/StudioMonitors', component: StudioMonitors },

  { path: '/Product/:id/:name', component: ProductDetails },
  { path: '/cart', component: Cart },
];
// const routes = [
//   {
//     categories: [
//       {
//         id: 'Guitars',
//         name: 'Guitars',
//         featured: [
//           { path: '/ElectricGuitars', component: ElectricGuitars },
//           { path: '/AcousticGuitars', component: AcousticGuitars },
//           { path: '/GuitarAccessories', component: GuitarAccessories },
//         ],
//       },
//       {
//         name: 'Basses',
//         featured: [
//           { path: '/ElectricBasses', component: ElectricBasses },
//           { path: '/AcousticBasses', component: AcousticBasses },
//           { path: '/BassAccessories', component: BassAccessories },
//         ],
//       },
//       {
//         id: 'Amps',
//         name: 'Amps',
//         featured: [
//           { path: '/GuitarAmps', component: GuitarAmps },
//           { path: '/BassAmps', component: BassAmps },
//           { path: '/Effects', component: Effects },
//         ],
//       },
//       {
//         id: 'Drums',
//         name: 'Drums',
//         featured: [
//           { path: '/AcousticDrums', component: AcousticDrums },
//           { path: '/ElectronicDrums', component: ElectronicDrums },
//           { path: '/DrumAccesories', component: DrumAccesories },
//         ],
//       },
//       {
//         id: 'Keyboards',
//         name: 'Keyboards',
//         featured: [
//           { path: '/DigitalPianos', component: DigitalPianos },
//           { path: '/Organs', component: Organs },
//           { path: '/Keyboards', component: Keyboards },
//         ],
//       },
//       {
//         id: 'Recording',
//         name: 'Recording',
//         featured: [
//           { path: '/AudioInterfaces', component: AudioInterfaces },
//           { path: '/Microphones', component: Microphones },
//           { path: '/StudioMonitors', component: StudioMonitors },
//         ],
//       },
//     ],
//   },
//   { path: '/', component: Home },
//   { path: '/Product/:id/:name', component: ProductDetails },
//   { path: '/cart', component: Cart },
// ];




export default routes;