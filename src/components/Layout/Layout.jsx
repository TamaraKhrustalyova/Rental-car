import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../common/Loader/Loader';
import { AppBar } from '../AppBar/AppBar';
import Container from '../Container/Container';

export const Layout = () => {
    return (
        <Container>
            <AppBar/>
            <main>
                <Suspense fallback={<Loader/>}>
                    <Outlet />
                </Suspense>
            </main>
        </Container>
    );
};

