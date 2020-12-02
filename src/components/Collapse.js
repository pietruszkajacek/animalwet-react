import React from "react";

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();

        this.state = { classCss: "collapseAV", inLineCss: -1 };

        this.handleClick = this.handleClick.bind(this);
        this.handleTransition = this.handleTransition.bind(this);
    }

    handleClick() {
        if (this.state.classCss === "collapseAV") {
            this.setState((state) => {
                return { classCss: "collapsingAV" };
            });
        } else if (this.state.classCss === "collapseAV showAV") {
            this.setState((state) => {
                return {
                    classCss: "collapsingAV",
                    inLineCss: this.myRef.current.offsetHeight,
                };
            });
        }
    }

    handleTransition() {
        if (
            this.state.classCss === "collapsingAV" &&
            this.state.inLineCss !== -1
        ) {
            this.setState((state) => ({
                classCss: "collapseAV showAV",
                inLineCss: -1,
            }));
        } else if (
            this.state.classCss === "collapsingAV" &&
            this.state.inLineCss === -1
        ) {
            this.setState((state) => ({
                classCss: "collapseAV",
                inLineCss: -1,
            }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.classCss === "collapseAV" &&
            this.state.classCss === "collapsingAV"
        ) {
            this.setState((state) => ({
                inLineCss: this.myRef.current.offsetHeight,
            }));
            // Emulate TransitionEnd
            if (this.myRef.current.offsetHeight === 0) {
                setTimeout(() => {
                    this.handleTransition();
                }, 350);
            }
        } else if (
            prevState.classCss === "collapseAV showAV" &&
            prevState.inLineCss === -1
        ) {
            setTimeout(() => {
                this.setState((state) => ({
                    inLineCss: -1,
                }));
            }, 0);

            // Emulate TransitionEnd
            if (this.myRef.current.offsetHeight === 0) {
                setTimeout(() => {
                    this.handleTransition();
                }, 350);
            }
        }
    }

    render() {
        return (
            <>
                <p className="mb-0 text-white-50" onClick={this.handleClick}>
                    {this.props.short}
                </p>
                <div
                    onClick={this.handleClick}
                    onTransitionEnd={this.handleTransition}
                    className={this.state.classCss}
                    style={
                        this.state.inLineCss !== -1
                            ? { height: this.state.inLineCss + "px" }
                            : {}
                    }
                >
                    <p ref={this.myRef} className="mb-0 text-white-50">
                        {this.props.collapse}
                    </p>
                </div>
            </>
        );
    }
}

export default Collapse;
