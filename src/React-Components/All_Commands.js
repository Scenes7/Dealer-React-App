import Header from './Header.js'
import ScrollHeaderCommands from './ScrollHeaderCommands.js'
const All_Commands = () => {
    return (
        <div className="App-header ">
            <ScrollHeaderCommands />
            <div class="pt-8 pb-16">
                <Header />
            </div>
            <div className='pl-8 py-16 font-light text-center'>
                <p className='text-4xl'>
                    A comprehensive list of all the features Dealer has to offer.
                </p>
            </div>
            <div className='bg-gray-100 pb-8'>
                <div className='py-16 text-center font-light'>
                    <p className='text-5xl'>
                        Game Commands
                    </p>

                </div>

                <div className="bg-transparent font-sans pl-8 font-thin flex space-x-4 mx-8">
                    <table class="table-fixed ">
                        <thead>
                            <tr>
                                <th>Game</th>
                                <th >Description</th>
                                <th>Command</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Black Jack</td>
                                <td>Classic Blackjack between you and the Dealer. Regain half your bet if you fold. Winning yields double your bet.</td>
                                <td>;bj (amount)</td>
                            </tr>
                            <br />
                            <tr>
                                <td>No Limit Texas Hold 'em poker</td>
                                <td>no limit Texas hold 'em poker with up to five people. The message sender pays big blind and the first player pays the small blind.</td>
                                <td>;poker (amount), (name1), (name2), ...</td>
                            </tr>
                            <br />
                            <tr>
                                <td>5 Card Poker</td>
                                <td>5 card poker variation with between 2 players. Winner takes all.</td>
                                <td>;five_poker (amount), (player)</td>
                            </tr>
                            <br />
                            <tr>
                                <td>Squares</td>
                                <td>A puzzle game; red squares need to be removed by inverting rows and columns, turning all red squares in the selected row/column white, and all white squares in the same row/column red.</td>
                                <td>;squares (amount)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='bg-gray-200 py-8 font-light'>
                <div className='py-16 text-center'>
                    <p className='text-5xl'>
                        Economy Commands
                    </p>
                </div>
                <div className="bg-transparent font-sans pl-8 font-thin flex space-x-4 mx-8">
                    <table class="table-fixed ">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th >Description</th>
                                <th>Command</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Check your balence</td>
                                <td>Check the amount of tokens you possess.</td>
                                <td>;balence</td>
                            </tr>
                            <br />
                            <tr>
                                <td>Check balences</td>
                                <td>Check other people's balences in your current server.</td>
                                <td>;bal (name)</td>
                            </tr>
                            <br />
                            <tr>
                                <td>Steal Chips</td>
                                <td>Attempt to steal chips with a 50% chance of success. Failing will result in the loss of half you chips plus chips equivilent to half of the target's total. The target will gain chips equivilent to half of their total.</td>
                                <td>;steal (name)</td>
                            </tr>
                            <br />
                            <tr>
                                <td>Daily Chips</td>
                                <td>Use this command to claim 1000 chips. Avaliable once a day. Command refreshes at midnight.</td>
                                <td>;daily</td>
                            </tr>
                            <br />
                            <tr>
                                <td>Local Leaderboard</td>
                                <td>Display a list of the top 5 richest users in the current server and their chip count.</td>
                                <td>;leaderboard</td>
                            </tr>
                            <br />
                            <tr>
                                <td>Give Chips</td>
                                <td>Transfer a specified number of chips to someone.</td>
                                <td>;give (name) (amount)</td>
                            </tr>
                            <br />
                            <tr>
                                <td>Spend Chips</td>
                                <td>Exchange chips for perks with the dealer.</td>
                                <td>;shop (item)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='bg-gray-100 pb-8'>
                <div className='py-16 text-center font-light'>
                    <p className='text-5xl'>
                        Miscellaneous Commands
                    </p>

                </div>

                <div className="bg-transparent font-sans pl-8 font-thin flex space-x-4 mx-8">
                    <table class="table-fixed ">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th >Description</th>
                                <th>Command</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Help</td>
                                <td>Display a help page.</td>
                                <td>;help</td>
                            </tr>
                            <br />
                            <tr>
                                <td>Display Commands</td>
                                <td>Display a list of all commands and how to use them.</td>
                                <td>;features</td>
                            </tr>
                            <br />
                            <tr>
                                <td>How to Play Poker</td>
                                <td>Shows a detailed message about how to play Texas Hold 'em Poker and how to use the poker feature.</td>
                                <td>;poker_rules</td>
                            </tr>
                            <br />
                            <tr>
                                <td>How to Play Squares</td>
                                <td>Shows a detailed message about how to play squares, as well as the win and loss conditions for the game.</td>
                                <td>;square_rules</td>
                            </tr>
                            <br />
                            <tr>
                                <td>Bot Information</td>
                                <td>Shows development information about Dealer.</td>
                                <td>;technical_information</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default All_Commands
