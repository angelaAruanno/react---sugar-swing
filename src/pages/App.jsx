import '../App.css'
import Header from '../components/organisms/Header';
import SecNewTastes from '../components/organisms/SecNewTastes';
import SecLocations from '../components/organisms/SecLocations';
import SecBooking from '../components/organisms/SecBooking'; 
import SecCards from "../components/organisms/SecCards";


export default function App() {

  return (
    <>
      <SecNewTastes />
      <Header className="w-full relative left-1/12" >SUGAR & SWING</Header>
      <SecCards />
      <SecLocations />
      <SecBooking />
    </>
  )
}


