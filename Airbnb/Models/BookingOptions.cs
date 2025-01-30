using System.ComponentModel.DataAnnotations;

namespace Catbnb.Models
{
    public class BookingOptions
    {
        public int Id { get; set; }

        [Required]
        [StringLength(15)]
        public string Name { get; set; } = string.Empty;
    }
}
