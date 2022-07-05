import { Button } from "@mui/material";
import React, { useState } from "react";

const DragButton = () => {
	const colors = ["primary", "secondary","success", "error"];
	const [offsetX, setOffsetX] = useState(0);
	const [offsetY, setOffsetY] = useState(0);
	const [dragging, setDragging] = useState(false);
	const [colorIndex, setColorIndex] = useState(0);
	const [styles, setStyles] = useState({
		position: "absolute",
		top: "50%",
		left: "50%",
		cursor: "pointer",
	});
	

	const dragStart = (e) => {
		setOffsetX(e.screenX - e.currentTarget.getBoundingClientRect().left);
		setOffsetY(e.screenY - e.currentTarget.getBoundingClientRect().top);
		setDragging(true);
	};
	const draggingHandler = (e) => {
		if (dragging) {
			const left = e.screenX - offsetX;
			const top = e.screenY - offsetY;
			if (
				left <= window.innerWidth - 100 &&
				left >= 0 &&
				top <= window.innerHeight - 40 &&
				top >= 0
			) {
				setStyles({ ...styles, left: left, top: top });
			}
			if (
				left === window.innerWidth - 100 ||
				left === 0 ||
				(top > window.innerHeight - 40 && top < window.innerHeight - 39) ||
				(top < 0 && top > -1)
			) {
				setColorIndex((prevColor) => (prevColor+1)%4);
			}
		}
	};
	const dragEnd = () => {
		setDragging(false);
	};

	return (
		<Button
			style={styles}
			color={colors[colorIndex]}
			variant="contained"
			onMouseDown={dragStart}
			onMouseMove={draggingHandler}
			onMouseUp={dragEnd}
		>
			Drag ME
		</Button>
	);
};

export default DragButton;
