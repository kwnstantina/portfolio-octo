import styles from './App.module.scss';
import AnimatedWordList from "./features/animatedWordList/animatedWordList";
import avatar from "./assets/AvatarMaker4.svg";
function App() {

  return (
    <div className={styles["wrapper"]}>
     
      <div className={styles['wrapper__img']}>
        <img src={avatar} alt="Konstantina Kirtsia" ></img>  
      </div>
      <div>
      <AnimatedWordList />
      </div>
    </div>
  )
}

export default App
