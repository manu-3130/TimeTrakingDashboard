import './TimeCard.css'

function TimeCard(props) {

    return (
        <section>
            <section class="">

                <div class=''>

                    <div class= {props.color}>
                        
                    </div>

                    <div class="work bg-primary-subtle p-4">
                        <div class="d-flex justify-content-between ">
                            <h5 class='text-white'>
                                {props.activity}
                            </h5>
                            <p>
                                ...
                            </p>
                        </div>

                        <h2 class='text-white'>
                            {props.hrs}
                        </h2>

                        <p>
                            {props.last}
                        </p>
                    </div>

                </div>

            </section>

        </section>
    )
}

export default TimeCard