

export const getLocation = address => {
  const locality = address.locality;
  const adminDistrict = address.adminDistrict2 ? address.adminDistrict2 : address.adminDistrict;
  const countryRegion = address.countryRegion;
  return `${locality}, ${adminDistrict}, ${countryRegion}`
}