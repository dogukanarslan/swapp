import React from 'react'

interface WrapperProps {
  children: React.ReactNode
}

export const Wrapper = (props: WrapperProps) => {
  const { children } = props
  return (
    <div className="border-primary flex h-full flex-col overflow-y-auto rounded border-4 p-4">
      {children}
    </div>
  )
}
