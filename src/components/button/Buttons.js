import { Button } from "react-bootstrap";

export const RoundedMainBtn = ({title}) => {
    return (
        <Button className="rounded-circle" >{title}</Button>
    )
}

export const DefaultBtn = ({title}) => {
    return (
        <Button className="DefaultBtn">{title}</Button>
    )
}

export const PrimaryBtn = ({title}) => {
    return (
        <Button className="PrimaryBtn">{title}</Button>
    )
}

export const SecondPrimaryBtn = ({title}) => {
    return (
        <Button className="SecondPrimaryBtn rounded-pill px-4 py-2 fw-bold my-2">{title}</Button>
    )
}

export const SecondPrimaryFillBtn = ({title}) => {
    return (
        <Button className="SecondPrimaryFillBtn">
            {title}
        </Button>
    )
}