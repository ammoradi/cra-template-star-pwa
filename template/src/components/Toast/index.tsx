import React from 'react'
import styled from 'styled-components'
import { ToastContainer, cssTransition, ToastContainerProps } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { scale } from 'theme/utils'

const Wrapper = styled.div`
  .Toastify__toast-container--top-center {
    top: 0;
    padding: 0;
    max-width: ${(props) => props.theme.sizes.appMaxWidth};
    z-index: 11;
  }

  .Toastify__toast {
    min-height: ${(props) => scale(props.theme.sizes.toastHeight)};
    padding: 0;
    border-radius: 0;
    box-shadow: none;
    justify-content: center;
    z-index: 11;
  }

  .Toastify__toast--error {
    background-color: ${(props) => props.theme.colors.secondary};

    .Toastify__toast-body::before {
      content: '';
      position: absolute;
    }
  }
  /* .Toastify__toast--warning {} */
  .Toastify__toast--success {
    background-color: ${(props) => props.theme.colors.primary};
  }
  .Toastify__toast-body {
    flex: unset;
    position: relative;
  }
`

function Toast() {
  const toastProps: ToastContainerProps = {
    position: 'top-center',
    autoClose: 3000,
    draggablePercent: 50,
    hideProgressBar: true,
    newestOnTop: true,
    closeOnClick: false,
    rtl: false,
    draggable: true,
    pauseOnHover: true,
    closeButton: <></>,
    transition: cssTransition({
      enter: 'Toastify__slide-enter',
      exit: 'Toastify__slide-exit',
      duration: [350, 1400],
      appendPosition: true
    })
  }

  return (
    <Wrapper>
      <ToastContainer {...toastProps} />
    </Wrapper>
  )
}

export default Toast
