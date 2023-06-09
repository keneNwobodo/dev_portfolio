import {Html, useProgress} from '@react-three/drei';

const CanvasLoader = () => {
  const {progress} = useProgress ();
  return (
    <Html>
      <span className="canvas-loader" />
      <p
        style={{
          fontSize: 15,
          fontWeight: 800,
          color: '#f1f1f1',
          marginTop: 40,
        }}
      >
        {progress.toFixed (2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
