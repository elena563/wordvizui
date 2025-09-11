import { useState } from "react"
import { Import, Bolt, Paintbrush } from 'lucide-react'
import LoadingPanel from "./LoadingPanel"
import SettingsPanel from "./SettingsPanel"
import AppearancePanel from "./AppearancePanel"

export default function Sidebar(){
    const [activeTab, setActiveTab] = useState(null)

    return(
        <aside className="bg-[#EAEBED] z-20 fixed left-0 top-16 h-[calc(100dvh-63px)] border-r-2 border-gray-400 pb-8">
            <div className=" py-10 w-20 flex flex-col items-center gap-6">
                <div className={`p-2 rounded-full cursor-pointer border-4 hover:bg-white ${
                        activeTab === 'load' ? 'border-[#636EFA] bg-white' : 'border-transparent bg-[#EAEBED]'
                    }`}
                    onClick={() => setActiveTab(activeTab === 'load' ? null : 'load')}>
                    <Import color={activeTab === 'load' ? '#636EFA' : '#000000'} />
                </div>
                <div className={`p-2 rounded-full cursor-pointer border-4 hover:bg-white ${
                        activeTab === 'settings' ? 'border-[#636EFA] bg-white' : 'border-transparent bg-[#EAEBED]'
                    }`}
                    onClick={() => setActiveTab(activeTab === 'settings' ? null : 'settings')}>
                    <Bolt className="hover:text-gray-400" color={activeTab === 'settings' ? '#636EFA' : '#000000'} />
                </div>
                <div className={`p-2 rounded-full cursor-pointer border-4 hover:bg-white ${
                        activeTab === 'appearance' ? 'border-[#636EFA] bg-white' : 'border-transparent bg-[#EAEBED]'
                    }`}
                    onClick={() => setActiveTab(activeTab === 'appearance' ? null : 'appearance')}>
                    <Paintbrush color={activeTab === 'appearance' ? '#636EFA' : '#000000'} />
                </div>
            </div>
            { activeTab == 'load' && 
                <section className="bg-[#EAEBED] p-4 absolute left-20 top-0 h-full w-64 border-2 border-gray-400">
                    <LoadingPanel />
                </section>
            }
            { activeTab == 'settings' && 
                <section className="bg-[#EAEBED] py-4 pl-4 absolute left-20 top-0 h-full w-64 border-2 border-gray-400">
                    <SettingsPanel />
                </section>
            }
            { activeTab == 'appearance' && 
                <section className="bg-[#EAEBED] p-4 absolute left-20 top-0 h-full w-64 border-2 border-gray-400">
                    <AppearancePanel />
                </section>
            }
        </aside>
    )
}