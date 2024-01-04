export default function MetaData({isDevPage, metaData}:{isDevPage: boolean, metaData: WebpageContent.MetaDataField[]}) {
    const createDataField = (type: string, data: string) => {
        switch (type) {
            case "link":
                return <a target="_blank" href={data} className={`text-felixriehm-link hover:underline break-all`}>{data}</a>
            case "mail":
                return <span className={'break-all'}>{data}</span>
            default:
                return <span className={'break-all'}>{data}</span>
        }
    };

    // https://tailwindcss.com/docs/content-configuration#dynamic-class-names
    const fadeDelays = new Map([
        [0, "animate-fadeInAndSlideDown-0"],
        [1, "animate-fadeInAndSlideDown-1"],
        [2, "animate-fadeInAndSlideDown-2"],
        [3, "animate-fadeInAndSlideDown-3"],
        [4, "animate-fadeInAndSlideDown-4"],
        [5, "animate-fadeInAndSlideDown-5"],
        [6, "animate-fadeInAndSlideDown-6"],
        [7, "animate-fadeInAndSlideDown-7"]
    ]);
    let borderColor = !isDevPage ? 'border-b-felixriehm-green-400' : 'border-b-felixriehm-blue-400'
    const listItems = metaData.map((metaDataField, index) =>
        <dl key={index} className={`${index < metaData.length-1 ? `border-solid border-b ${borderColor}` : ""} px-4 py-2 text-felixriehm-grey-400 ${fadeDelays.get(index)}`}>
            <dt className={`uppercase font-medium`}>{metaDataField.title}</dt>
            <dd>
                {createDataField(metaDataField.type, metaDataField.data)}
            </dd>
        </dl>
    );

    return (
        <div className={`w-full`}>
            {listItems}
        </div>
    )
}