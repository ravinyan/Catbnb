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

        [Required]
        public string Description { get; set; } = string.Empty;

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
        public bool InfantsAllowed { get; set; } = false;

        //public int ReviewId { get; set; }
        //public Reviews? Reviews { get; set; }

        public CatCard? CatCard { get; set; }
    }
}
