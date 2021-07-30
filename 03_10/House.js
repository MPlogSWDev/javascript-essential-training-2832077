class House{
constructor(
    address,
    numberOfBedrooms,
    numberOfBathrooms,
    sqFootage,
    hasIceMaker,
    hasDishwasher,
    hasGarabadgeDisposal,
    numberOfCabinets,
    hasGarage,
    yardSize,
) {
    this.address = address;
    this.numberOfBedrooms = numberOfBedrooms;
    this.numberOfBathrooms = numberOfBathrooms;
    this.sqFootage = sqFootage;
    this.kitchen ={
        hasIceMaker: hasIceMaker,
        hasDishwasher: hasDishwasher,
        hasGarabadgeDisposal: hasGarabadgeDisposal,
        numberOfCabinets: numberOfCabinets,
    };
    this.hasGarage = hasGarage;
    this.yardSize = yardSize;
}

addGarbadgeDisposal(){
    this.kitchen.hasGarabadgeDisposal = true;
}

}