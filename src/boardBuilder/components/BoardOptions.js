import React, { useState } from 'react';

const BoardOptions = () => {

    const [boardWidth, setBoardWidth] = useState('');
    const [boardHeight, setBoardHeight] = useState('');

    let isWidthValid = false;
    let isHeightValid = false;

    let widthControlsMessage = [];
    let heightControlsMessage = [];
    heightControlsMessage["inputFieldClass"] = widthControlsMessage["inputFieldClass"] = "form-control";

    let isSubmitDisabled = true;

    const testWidthOrHeight = (value) => {
        if (!isNaN(value)) {
            if (value > 20 || value < 1) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }
    
    const inputMessage = (status) => {
        let formControlsMessage = [];
        if (status) {
            formControlsMessage["inputMessageText"] = "";
            formControlsMessage["inputMessageClass"] = "text-success";

            formControlsMessage["inputFieldClass"] = "form-control text-success";
        } else {
            formControlsMessage["inputMessageText"] = "Saisir un nombre entre 1 et 20";
            formControlsMessage["inputMessageClass"] = "text-danger";

            formControlsMessage["inputFieldClass"] = "form-control text-danger";
        }
        return formControlsMessage;
    }

    const handleWidthChange = (e) => {
        setBoardWidth(e.currentTarget.value);
    }

    const handleHeightChange = (e) => {
        setBoardHeight(e.currentTarget.value);
    }

    const handleSubmitClick = () => {
        const width = document.querySelector('#boardWidth').value;
        const height = document.querySelector('#boardHeight').value;
        console.log("Height : " + height + "\nWidth : " + width);
    }

    if (boardWidth !== "") {
        isWidthValid = testWidthOrHeight(boardWidth);
        widthControlsMessage = inputMessage(isWidthValid);
    }

    if (boardHeight !== "") {
        isHeightValid = testWidthOrHeight(boardHeight);
        heightControlsMessage = inputMessage(isHeightValid)
    }

    if (boardHeight !== "" && boardWidth !== "") { 
        if (isWidthValid && isHeightValid) {
            isSubmitDisabled = false;
        }
    }

    return (
        <div className="row">
            <form>
                <div className="row">
                    <div className="col-5">
                        <input 
                            type="text"
                            className={widthControlsMessage["inputFieldClass"]}
                            name="boardWidth" 
                            id="boardWidth"
                            placeholder="Largeur (20max) *" 
                            onChange={handleWidthChange} 
                            value={boardWidth} 
                            autoComplete="off"
                        />
                        <div ><p 
                            id="boardWidthMessage"
                            className={widthControlsMessage["inputMessageClass"]}
                        >
                            {widthControlsMessage["inputMessageText"]}
                        </p></div>
                    </div>  
                    <div className="col-5">
                        <input 
                            type="text"
                            className={heightControlsMessage["inputFieldClass"]}
                            name="boardHeight" 
                            id="boardHeight" 
                            placeholder="Hauteur (20max) *" 
                            value={boardHeight} 
                            onChange={handleHeightChange} 
                            autoComplete="off"
                        />
                        <div ><p 
                            id="boardHeightMessage"
                            className={heightControlsMessage["inputMessageClass"]}
                        >{heightControlsMessage["inputMessageText"]}</p></div>
                    </div> 
                    <div className="col-2">
                        <input
                            type="button"
                            id="submit"
                            className="btn btn-primary"
                            value="Valider"
                            onClick={handleSubmitClick}
                            disabled={isSubmitDisabled}
                        />
                    </div>
                </div>
                
            </form>
        </div>
    )
    
}

export default BoardOptions