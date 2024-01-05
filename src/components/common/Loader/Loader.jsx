import { MutatingDots } from "react-loader-spinner";
import { Backdrop } from './Loader.styled';

export const Loader = () => {
    return (
        <Backdrop>
            <MutatingDots
                height="100"
                width="100"
                color="#4fa94d"
                secondaryColor='#4fa94d'
                radius='12.5'
                ariaLabel="mutating-dots-loading"
            />
        </Backdrop>
    );
};
