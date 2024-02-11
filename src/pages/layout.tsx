import { ReactNode } from 'react';
import { ModeToggle } from '@/components/mode-toggle'
import { Menubar, MenubarMenu } from '@/components/ui/menubar'
import { ScrollArea } from '@/components/ui/scroll-area';

type LayoutProps = {
  children: ReactNode,
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ScrollArea scrollHideDelay={200} type='scroll' className='h-screen w-screen bg-white dark:bg-slate-800'>
      <Menubar className='w-full sticky py-8 justify-end bg-transparent opacity-85 px-6'>
        <MenubarMenu>
          <ModeToggle />
        </MenubarMenu>
      </Menubar>
      {children}
    </ScrollArea>
  )
}

export default Layout