import React, { useState, useEffect } from 'react';

import styled, { ThemeProvider } from 'styled-components';
import { Home, About } from '../pages';
import { Nav } from '../components';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = () => {


    return (
        <>
            {/* <Head /> */}

            <div >


                <Nav />



            </div>
        </>
    );
};



export default Layout;