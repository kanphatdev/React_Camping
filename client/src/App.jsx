import { Toaster } from "./components/ui/toaster";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div>
      <AppRoutes />
      <Toaster />
    </div>
  );
};
export default App;
