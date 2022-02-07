import Login from './content/login';
import Signup from './content/signup'
import Home from './content/home';
import Pet from './content/pet';
import NewPet from './content/new_pet';
import NewVet from './content/new_vet';

function Content() {
  return (
    <>
      <Login />
      <Signup />
      <Home />
      <Pet />
      <NewPet />
      <NewVet />
    </>
  );
}

export default Content;