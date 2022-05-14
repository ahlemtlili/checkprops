import "./App.css";
import image from "./ahlemphoto.jpg"
import ProfileComponent from './Component/Profile/ProfileComponent';
function App() {
  const handleName = (fullName) => {
    alert(`The fullname is ${fullName}`);
  };
  return (
    <div className="App">
<ProfileComponent  fullName="Ahlem Tlili" handleName={handleName} bio="Passionnée de développement informatique , j'essaye toujours à développer mes
compétences dans le domaine de l'IT." 
 profession="Développeuse informatique" >  
  <img className='image'
src={image}
alt=""/>
</ProfileComponent>
    </div>
  );
}
export default App;
