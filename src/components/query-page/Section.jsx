import React, { Component } from 'react';

class Section extends Component {
    render() {
        return (
            <section class="query-strip">
                <div class="container d-flex h-100 justify-content-md-center">
                    <div class="col-10 main-strip-padding">
                        <div class="heading-container align-items-center h-100 row">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="jumbotron">
                                            <h1 class="display-4">What are you looking for?</h1>

                                            <hr class="my-4" />

                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Eg: Smartphone" />
                                            </div>
                                            <button class="btn btn-sm btn-primary float-right">Continue</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section