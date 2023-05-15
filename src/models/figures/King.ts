import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/chess-king-black.png"
import whiteLogo from "../../assets/chess-king-white.png"

export class King extends Figure{

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false;
        const dx = Math.abs(target.x - this.cell.x)
        const dy = Math.abs(target.y - this.cell.y)
        console.log(`${dx} ${dy}`)
        if((dx === 1 && dy === 1) || (dy === 1 && dx === 0) || (dy === 0 && dx === 1)){
            console.log('here')
            return true
        }
        return false;
    }
}