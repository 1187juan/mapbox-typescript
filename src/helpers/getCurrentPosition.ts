export const getCurrentPosition = async (): Promise<[number, number]> => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
			({ coords }) => {
				resolve([coords.longitude, coords.latitude])
			},
			err => reject(err)
		)
	})
}
