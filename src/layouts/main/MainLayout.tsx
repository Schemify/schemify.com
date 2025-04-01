import React from 'react'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return <>{props.children}</>
}

export default MainLayout
