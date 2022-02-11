import Login from './content/login';
import Signup from './content/signup'
import Home from './content/home';
import Pets from './content/pets';
import NewPet from './content/new_pet';
import NewVet from './content/new_vet';

function Content() {
  return (
    <>
      <Login />
      <Signup />
      <Home />
      <Pets />
      <NewPet />
      <NewVet />
    </>
  );
}

export default Content;