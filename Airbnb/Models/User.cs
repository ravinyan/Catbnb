using System.ComponentModel.DataAnnotations;

namespace Airbnb.Models
{
	public class User
	{
		public int Id { get; set; }

		[MaxLength(50)]
		public string FirstName { get; set; } = string.Empty;

		[MaxLength(50)]
		public string LastName { get; set; } = string.Empty;

		[MaxLength(50)]
		public string Email { get; set; } = string.Empty;

		public int PhoneNumber { get; set; }

		[MinLength(8)]
		public string Password { get; set; } = string.Empty;

		public ICollection<PlaceOfStay>? FavouritedPlaces { get; set; }
	}
}
