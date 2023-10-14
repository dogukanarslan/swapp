import React from 'react'

interface WrapperProps {
  children: React.ReactNode
}

export const Wrapper = (props: WrapperProps) => {
  const { children } = props
  return (
    <div className="flex h-full flex-col overflow-y-auto rounded border-2 border-primary p-4">
      {children}
    </div>
  )
}
