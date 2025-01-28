using System.ComponentModel.DataAnnotations;

namespace Catbnb.Models
{
    public class AccessibilityFeatures
    {
        public int Id { get; set; }

        [StringLength(200)]
        [Required]
        public string Name { get; set; } = string.Empty;
    }
}
