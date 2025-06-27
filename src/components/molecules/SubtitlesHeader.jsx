import SubtitleHeader from "../atoms/SubtitleHeader";

export default function SubtitlesHeader({ className }) {
    return (
        <>
            <div className={className}>
                <div className="flex w-4/5 justify-between">
                    <SubtitleHeader>
                        DONUTS
                    </SubtitleHeader>

                    <SubtitleHeader>
                        From 1985
                    </SubtitleHeader>
                </div>
            </div>
        </>

    )
}