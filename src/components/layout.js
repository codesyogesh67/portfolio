import React, { useState, useEffect } from 'react';

import styled, { ThemeProvider } from 'styled-components';
import { Home } from '../pages';
import { Nav } from '../components';
import { GlobalStyles, theme } from '../styles';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = () => {


    return (
        <>
            {/* <Head /> */}

            <div id="root">
                {/* <ThemeProvider theme={theme}> */}
                <GlobalStyles />

                <Nav />
                <Home />


            </div>
        </>
    );
};



export default Layout;