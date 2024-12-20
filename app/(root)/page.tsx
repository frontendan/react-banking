import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/User.Actions'
import React from 'react'

const Home = async () => {
    const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
               <HeaderBox 
                type="greeting"
                title="Welcome,"
                user={loggedIn?.name || 'Guest'}
                subtext = "Access and manage your account and transactions efficiently"
               />

               <TotalBalanceBox 
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1350.50}
               />
            </header>
        </div>

        <RightSidebar
          user={loggedIn}
          transactions={[]}
          banks={[{currentBalance: 12350.50}, 
            {currentBalance: 560.25}]}
        />
    </section>
  )
}

export default Home