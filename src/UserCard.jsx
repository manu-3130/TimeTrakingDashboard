import './UserCard.css'

function UserCard() {

    return (
        <section>
            <section class="">
                <div class=" bg-primary rounded p-3 ">
                    <div>
                        <img src="./public/image-jeremy.png" alt="" />

                        <p class="mt-3 mb-0">Report for</p>

                        <h1 class="mb-5">
                            Jeremy Robson
                        </h1>
                    </div>
                </div>

            </section>

            <section class="">
                <div class='bg-primary-subtle rounded p-3 tarjet'>
                    <p>
                        Daily
                    </p>

                    <p>
                        <strong>
                            Weekly
                        </strong>
                    </p>

                    <p>
                        Monthy
                    </p>
                </div>
            </section>

        </section>
    )
}

export default UserCard