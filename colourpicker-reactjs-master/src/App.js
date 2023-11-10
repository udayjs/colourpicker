import ColorPicker from "./color-picker.js"
import "./color-picker.css"
import "./index.css"

const App = () => {
    
    const colors = ['#FF0000', '#0000FF', '#008000', '#FFFF00', '#800080', '#FFFFFF', '#c71585', '#00FF00', '#a52a2a', '#ffd700', '#ffe4b5', '#ffa500', '#808080', '#ffb6c1', '#6a5acd']
    
    return(
        <div>
            <h1>Color Picker</h1>
            <div>
                <div className="color-switch">
                    <ColorPicker colors={ colors } />
                </div>
            </div>
        </div>
    )
}

export default App;