import styles from "./App.module.scss";
import AnimatedWordList from "./features/animatedWordList/animatedWordList";
import MatrixRain from "./matrixRain";

const App=()=> {
  return (
    <>
    <div className={styles["wrapper"]}>
      <div>
        <AnimatedWordList />
      </div>
         <MatrixRain />
    </div>
 
    </>
  );
}

export default App;
