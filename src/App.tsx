import styles from "./App.module.scss";
import AnimatedWordList from "./features/animatedWordList/animatedWordList";
import HoverEffect from "./features/hoverEffect/hoverEffect";
import MatrixRain from "./matrixRain";

const App=()=> {
  return (
    <>
   
    <div className={styles["wrapper"]}>
    <HoverEffect>
      <div>
        <AnimatedWordList />
      </div>
      </HoverEffect>
         <MatrixRain />
    </div>
    </>
  );
}

export default App;
