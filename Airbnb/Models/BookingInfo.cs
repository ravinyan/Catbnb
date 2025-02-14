using Catbnb.Models;
using System.ComponentModel.DataAnnotations;

namespace Airbnb.Models
{
    public class BookingInfo
    {
        public int Id { get; set; }

        [Required]
        public string Country { get; set; } = string.Empty;

        [Required]
        public string City { get; set; } = string.Empty;

        [Required]
        [Range(0, int.MaxValue)]
        public decimal BasePrice { get; set; } = decimal.Zero;

        public decimal CleaningFee { get; set; } = decimal.Zero;

        [Required]
        public string Description { get; set; } = string.Empty;

        [Required]
        public string ShortDescription { get; set; } = string.Empty;

        [Required]
        public string AvailableUntilDate { get; set; } = string.Empty;

        [Required]
        [Range(1, 16)]
        public int NumberOfBedrooms { get; set; } = 1;

        [Required]
        [Range(1, 16)]
        public int NumberOfBeds { get; set; } = 1;

        [Required]
        [Range(1, 16)]
        public int NumberOfBathrooms { get; set; } = 1;

        [Required]
        [Range(1, 16)]
        public int MaxNumberOfGuests { get; set; } = 1;

        [Required]
        public bool PetsAllowed { get; set; } = false;

        [Required]
        public bool SelfCheckin { get; set; } = false;

        [Required]
        public bool InstantBook { get; set; } = false;

        [Required]
        public string TypeOfPlace { get; set; } = string.Empty;

        [Required]
        public int MaxNumberOfPets { get; set; } = 0;

        [Required]
        public bool InfantsAllowed { get; set; } = false;

		public ICollection<Reviews>? Reviews { get; set; }

        [Required]
        public CatCard? CatCard { get; set; }

        [Required]
        public ICollection<BookingInfoAccessibilityFeatures>? AccessibilityFeatures { get; set; }

        [Required]
        public ICollection<BookingInfoHostLanguages>? HostLanguages { get; set; }

        [Required]
        public int PropertyTypeId { get; set; }
        public PropertyType? PropertyType { get; set; }

        [Required]
        public ICollection<BookingInfoBookingOptions>? BookingOptions { get; set; }
    }
}
