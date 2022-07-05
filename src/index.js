import ReactDOM from "react-dom/client";
import React from "react";
import DragButton from "./DragButton";
const App = () => {
	return <DragButton />;
};
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
