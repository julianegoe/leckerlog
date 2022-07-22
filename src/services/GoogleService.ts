export const ConvertDMSToDEG = (dms: [number, number, number], direction: string) => {
    const degrees = dms[0];
    const minutes = dms[1];
    const seconds = dms[2];

    let deg = degrees + minutes/60 + seconds/3600;

    if (direction == "S" || direction == "W") {
        deg = deg * -1;
    } // Don't do anything for N or E
    return deg;
}
